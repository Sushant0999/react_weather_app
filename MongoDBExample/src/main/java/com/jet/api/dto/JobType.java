package com.jet.api.dto;

public enum JobType {
    PRIVATE(1, "PRIVATE"),
    PUBLIC(2, "PUBLIC"),
    TRANSFER(3, "TRANSFER");

    private int intValue;
    private String stringValue;

    private JobType(int intValue, String stringValue) {
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
