# Angular Docs

## Commands (ng Cli)

### Generate environment files
```sh
ng g environments
```

### Execute project
```sh
ng serve
```

### Create a component
Set of files that conform a component
```sh
ng g c {name} --inline-style --skip-tests
```

### Create a service
Class that contains reusable business logic, data access, or functionality that can be shared across multiple components, directives, or other services.

Command pattern:
```sh
ng g service core/services/{name}.service
```

Example:

http.service.ts
```sh
ng g service core/services/http.service
```

### Create an interceptor
Piece of code that sits between your application and the HTTP requests/responses (like a middleware for HttpClient).

Command pattern:
```sh
ng g interceptor core/interceptors/{name}
```

Example:

error.interceptors.ts
```sh
ng g service core/interceptors/error
```

### Create a guard
Mechanism that decides whether a user is allowed to navigate to a route (security checkpoint for routes).

#### Types

- CanActivate → Can I enter this route?
- CanActivateChild → Can I enter its child routes?
- CanDeactivate → Can I leave this route?
- CanMatch → Does this route apply to me?

Command pattern:
```sh
ng g guard core/guards/{name}
```

Example:

error.interceptors.ts
```sh
ng g guard core/guards/auth
```