const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { PeriodicExportingMetricReader, } = require('@opentelemetry/sdk-metrics');
const { OTLPMetricExporter } = require("@opentelemetry/exporter-metrics-otlp-proto")
const {OTLPTraceExporter} = require("@opentelemetry/exporter-trace-otlp-proto")
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api')

const sdk = new NodeSDK({
  serviceName: 'express-opentelemetry',
  traceExporter: new OTLPTraceExporter({
    url: "http://demo-collector-headless:4318/v1/traces",
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: 'http://demo-collector-headless:4318/v1/metrics', // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
    }),
  }),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk
  .start()

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
