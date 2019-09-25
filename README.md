# TS to CSharp

Convert typescript interfaces to CSharp classes

Simply select your typescript interfaces and call the command `TS => CS: Generate classes from interfaces`.

```typescript
interface MyTypescriptClass {
    propOne: any;
    propTwo: string;
    propThree: number[];
    propFour: boolean;
}

interface AnotherTypescriptClass {
    nestedObjectsInAList: MyTypescriptClass[];
    recursiveObject: AnotherTypescriptClass;
    isReallyCool: boolean;
}
```

Will be converted to

```csharp
public class MyTypescriptClass {

    [JsonProperty("propOne")]
    public object PropOne;

    [JsonProperty("propTwo")]
    public string PropTwo;

    [JsonProperty("propThree")]
    public IEnumerable<int> PropThree;

    [JsonProperty("propFour")]
    public bool PropFour;

}

public class AnotherTypescriptClass {

    [JsonProperty("nestedObjectsInAList")]
    public IEnumerable<MyTypescriptClass> NestedObjectsInAList;

    [JsonProperty("recursiveObject")]
    public AnotherTypescriptClass RecursiveObject;

    [JsonProperty("isReallyCool")]
    public bool IsReallyCool;

}

```

## Commands

| Command                                             | Description                                                                                                 |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| TS => CS: Generate classes from interfaces          | Generate CSharp classes from the current selected Typescript interfaces                                     |
| TS => CS: Generate classes from exported interfaces | Generate CSharp classes from the current selected Typescript interfaces; only including exported interfaces |
