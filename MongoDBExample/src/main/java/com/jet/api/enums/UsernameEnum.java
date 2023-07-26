package com.jet.api.enums;


public enum UsernameEnum {
    _Hello123(1, "_Hello123"),
    USER_ADMIN(2, "USER_ADMIN"),
    Hello123(3, "Hello123"),
    US(4, "US"),
    USE(5, "USE");

    private int intValue;
    private String stringValue;

    private UsernameEnum(int intValue, String stringValue) {
        this.intValue = intValue;
        this.stringValue = stringValue;
    }

    public int getIntValue() {
        return intValue;
    }

    public String getStringValue() {
        return stringValue;
    }
}
