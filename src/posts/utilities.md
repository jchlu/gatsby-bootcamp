---
title: 'Utilities in Monolog'
date: '2019-08-12'
---
# Utilities

- _Registry_: The `Monolog\Registry` class lets you configure global loggers that you
  can then statically access from anywhere. It is not really a best practice but can
  help in some older codebases or for ease of use.
- _ErrorHandler_: The `Monolog\ErrorHandler` class allows you to easily register
  a Logger instance as an exception handler, error handler or fatal error handler.
- _ErrorLevelActivationStrategy_: Activates a FingersCrossedHandler when a certain log
  level is reached.
- _ChannelLevelActivationStrategy_: Activates a FingersCrossedHandler when a certain
  log level is reached, depending on which channel received the log record.