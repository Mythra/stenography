# Stenography #

Stenography is a small node application that is useful for testing a series
of client requests that expect a 200 response body back. Stenography
records all requests coming in (except those to: `/fetch_recording`),
simply responding with 200 OK, and an empty body.

From there you can call: `/fetch_recording`, and receive all the requests
that have been "built up", this then flushes the recorded messages.

This was originally created to test a LOG sink. Ensuring the LOG SINK
got any messages.

## Build ##

### Requirements ###

* Docker

### Building ###

Simply run: `docker build -t <my-tag> .` to build an image tagged whatever
value you passed in as my-tag.

## Running ##

Once you have built an image locally (or just pulled: `securityinsanity/stenography`)
you can simply run:

`docker run --rm -p 8080:8080 -d <my-tag>`

This will spin up stenography, and start it running on port 8080.

