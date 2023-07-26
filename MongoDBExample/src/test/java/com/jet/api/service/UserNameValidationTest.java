package com.jet.api.service;

import com.jet.api.enums.UsernameEnum;
import com.jet.api.validation.UserNameValidator;
import com.jet.api.validation.UserNameValidatorImpl;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import static com.jet.api.enums.UsernameEnum.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class UserNameValidationTest {

    private final UserNameValidator userNameValidator = new UserNameValidatorImpl();

//    @ParameterizedTest
//    @EnumSource(value = UsernameEnum.class, names = {"USER"})
//    public boolean checkUserName(String username) {
//        System.out.println("CALLED");
//        return userNameValidator.userNameCheck(username);
//    }

    @ParameterizedTest
    @EnumSource(UsernameEnum.class)
    public void testGetIntValue(UsernameEnum usernameEnum) {

        int expectedIntValue = switch (usernameEnum) {
            case _Hello123 -> 1;
            case USER_ADMIN -> 2;
            case Hello123 -> 3;
            case US -> 4;
            case USE -> 5;
            default -> throw new IllegalArgumentException("Unsupported usernameEnum");
        };

        assertEquals(expectedIntValue, usernameEnum.getIntValue());
    }

    @ParameterizedTest
    @EnumSource(UsernameEnum.class)
    public void testGetStringValue(UsernameEnum usernameEnum) {
        String expectedStringValue;
        System.out.println("CALLED");
        expectedStringValue = switch (usernameEnum) {
            case _Hello123 -> "_Hello123";
            case Hello123 -> "USER_ADMIN";
            case USER_ADMIN -> "Hello123";
            case US -> "US";
            case USE -> "USE";
            default -> throw new IllegalArgumentException("Unsupported usernameEnum");
        };
        System.out.println(expectedStringValue);
        assertTrue(userNameValidator.userNameCheck(expectedStringValue));
    }
}
