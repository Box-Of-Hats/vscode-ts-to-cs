# TS to CSharp

Convert typescript interfaces and classes to CSharp classes.

Get it on the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=Box-Of-Hats.ts-to-csharp)

Simply select your typescript interfaces and call the command `TS => CS: Generate classes from interfaces`.

```typescript
interface MyTypescriptInterface {
    propOne: any;
    propTwo: string;
    propThree: number[];
    propFour: boolean;
}

class AnActualClass {
    aProperty: string;
}

interface AnotherTypescriptInterface {
    nestedObjectsInAList: MyTypescriptInterface[];
    recursiveObject: AnotherTypescriptInterface;
    isReallyCool: boolean;
}
```

Will be converted to

```csharp
public class MyTypescriptInterface {

    [JsonProperty("propOne")]
    public object PropOne;

    [JsonProperty("propTwo")]
    public string PropTwo;

    [JsonProperty("propThree")]
    public IEnumerable<int> PropThree;

    [JsonProperty("propFour")]
    public bool PropFour;

}

public class AnActualClass {

    [JsonProperty("aProperty")]
    public string AProperty;

}

public class AnotherTypescriptInterface {

    [JsonProperty("nestedObjectsInAList")]
    public IEnumerable<MyTypescriptInterface> NestedObjectsInAList;

    [JsonProperty("recursiveObject")]
    public AnotherTypescriptInterface RecursiveObject;

    [JsonProperty("isReallyCool")]
    public bool IsReallyCool;

}

```

## Commands

| Command                                             | Description                                                                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| TS => CS: Generate classes from interfaces          | Generate CSharp classes from the current selected Typescript interfaces or classes                                     |
| TS => CS: Generate classes from exported interfaces | Generate CSharp classes from the current selected Typescript interfaces; only including exported interfaces or classes |
