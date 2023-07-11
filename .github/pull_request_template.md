## What is the desired outcome?
e.g. all incoming API requests should contain the `X-Perx-SentFrom` header. if the header is not present, a 400 is immediately returned. See PX-FOO for more information.

## Why do we want this?
e.g. allows us to accurately track where each of our API requests are coming from

## How?
e.g. a new, top layer middleware checks incoming requests for the header, and throws an AppError if it is not present.

## Testing?
e.g. open a valid API request in Postman or similar, and do the following
1. Send the request, expect to receive a successful response
2. Remove the `X-Perx-SentFrom` header
3. Send the request, expect to receive a 400

## Screenshots (optional)
e.g. N/A or attach images

## Anything else? Questions? Concerns?
e.g. we may wish to trigger the middleware only below admin ops as we don't necessarily need to see where admin ops requests are coming from
