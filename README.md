# Data Dictionary Graphql Client

Demo application

## Graphql Sample Interface

[https://monsters-tst.kuali.co/cor/datadictionary/api/v1/graphql]

## Sample Graphql Requests

### List all modules

```
query {
  modules {
    id
    name
  }
}
```

### Get module by id

```
query {
  module(id: 1) {
    id
    name
  }
}
```

### Get module by id with entities

```
query {
  module(id: 1) {
    id
    name
    entities {
      id
      name
    }
  }
}
```

### Get entity by name with module and children
```
query {
  getEntity(props: {name: "Tax Region"}) {
    id
    module {
      name
    }
    children {
      name
      _type
    }
  }
}
```

### Get table with fields
```
query {
  table(id: 102) {
    id
    name
    fields {
      id
      name
    }
  }
}
```
