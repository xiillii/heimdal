# Heimdal
A MERN app for passwords generator


## API - Backend

### Get password generator methods

``` javascript
[GET] api/methods
```

**Response**
- Data
    - List of methods
    - Id
    - Method name
    - Method decription
    - Mininum length
    - Maximum length
- Meta with result information
  - Success
  - Failed
  - Errors
    - Code
    - Message

### Generate a secure password

```javascript
[POST] api/generate
```

**Request**

- MethodId
- Length

**Response**

- Data
  - password
- Meta with result information
  - Success
  - Failed
  - Errors
    - Code
    - Message



## Frontend

