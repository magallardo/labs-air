// ArduinoJson - arduinojson.org
// Copyright Benoit Blanchon 2014-2019
// MIT License

#pragma once

#include "version.hpp"

#include "Configuration.hpp"

#define ARDUINOJSON_DO_CONCAT(A, B) A##B
#define ARDUINOJSON_CONCAT2(A, B) ARDUINOJSON_DO_CONCAT(A, B)
#define ARDUINOJSON_CONCAT3(A, B, C) \
  ARDUINOJSON_CONCAT2(A, ARDUINOJSON_CONCAT2(B, C))
#define ARDUINOJSON_CONCAT4(A, B, C, D) \
  ARDUINOJSON_CONCAT2(ARDUINOJSON_CONCAT2(A, B), ARDUINOJSON_CONCAT2(C, D))
#define ARDUINOJSON_CONCAT8(A, B, C, D, E, F, G, H)    \
  ARDUINOJSON_CONCAT2(ARDUINOJSON_CONCAT4(A, B, C, D), \
                      ARDUINOJSON_CONCAT4(E, F, G, H))
#define ARDUINOJSON_CONCAT10(A, B, C, D, E, F, G, H, I, J) \
  ARDUINOJSON_CONCAT8(A, B, C, D, E, F, G, ARDUINOJSON_CONCAT3(H, I, J))

#define ARDUINOJSON_NAMESPACE                                            \
  ARDUINOJSON_CONCAT10(                                                  \
      ArduinoJson, ARDUINOJSON_VERSION_MAJOR, ARDUINOJSON_VERSION_MINOR, \
      ARDUINOJSON_VERSION_REVISION, _, ARDUINOJSON_USE_LONG_LONG,        \
      ARDUINOJSON_USE_DOUBLE, ARDUINOJSON_DECODE_UNICODE,                \
      ARDUINOJSON_ENABLE_NAN, ARDUINOJSON_ENABLE_INFINITY)
