# useForm hook

Example of usage:

```
    const initialForm: {
        property1: "hi",
        property2: 3
    }
    const [ values, handleInputChange, reset] = useForm(initialForm);
```

If no initialForm is given, it will be initialized as an empty object by default.