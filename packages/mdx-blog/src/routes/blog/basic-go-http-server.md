---
title: 'Basic Go HTTP web server'
description: 'How to create a simple HTTP web server in Go.'
date: 'February 25, 2022'
heroImageAlt: 'Golang logos'
thumbnailImageAlt: 'Golang logos'
tags: 'golang'
---

---

## 3 essential things to create a basic HTTP server

- **Handler** - MVC like controllers which execute app logic and for writing HTTP response headers and bodies
- **Router** - A servemux that stores the mapping of the URL patterns and their corresponding handlers. One servemux for entire app.
- **Web Server** - To listen for incoming requests. No need for external packages like NGINX or Apache. Go has its own package.

```go:main.go
package main

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", home)

	http.ListenAndServe(":4000", mux)
}
```

- **`main`** - main package and entry point of the app to start.
- **`home`** - handler function which takes **`w http.ResponseWriter`** param which provides methods for assembling HTTP response and **`r *http.Request`** param is a pointer to a struct that holds info about the current request.
- **`http.NewServeMux()`** - registers a new servemux and registers the handler to a URL pattern.
- **`http.ListenAndServe()`** - starts a new web server which takes a TCP network address in this format **`":4000"`** and a servemux.

> 💡 By default **`"/"`** path acts like catch-all regardless of their URL path.

---

## Running the application

To run the application, we need to run any of the below commands

```go
go run main.go
go run .          // path to specific package
go run msrgb.in/snippetbox    // full module path
```
