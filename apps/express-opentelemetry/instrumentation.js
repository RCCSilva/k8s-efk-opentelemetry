const { NodeSDK, resources } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { PeriodicExportingMetricReader, } = require('@opentelemetry/sdk-metrics');
const { OTLPMetricExporter } = require("@opentelemetry/exporter-metrics-otlp-proto")
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-proto")
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api')
const { WinstonInstrumentation } = require('@opentelemetry/instrumentation-winston')
const {
  envDetector,
  hostDetector,
  osDetector,
  processDetector,
  Resource
} = require('@opentelemetry/resources');
const { containerDetector } = require('@opentelemetry/resource-detector-container')
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");

const sdk = new NodeSDK({
  serviceName: 'app-express-opentelemetry',
  traceExporter: new OTLPTraceExporter({
    url: "http://demo-collector-headless:4318/v1/traces",
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: 'http://demo-collector-headless:4318/v1/metrics', // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
    }),
  }),
  instrumentations: [
    getNodeAutoInstrumentations(),
    new WinstonInstrumentation({
      // Optional hook to insert additional context to log metadata.
      // Called after trace context is injected to metadata.
      logHook: (span, record) => {
        record['service.name'] = 'app-express-opentelemetry';
      },
    }),
  ],
  resource: new Resource({
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: "development",
    [SemanticResourceAttributes.K8S_POD_NAME]: process.env.HOSTNAME,
    'service.environment': 'development',
  }),
  resourceDetectors: [
    envDetector,
    hostDetector,
    osDetector,
    processDetector,
    containerDetector
  ]
});

sdk
  .start()

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
