package com.jet.api.service;

import com.jet.api.validation.EmailValidator;
import com.jet.api.validation.EmailValidatorImpl;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class EmailValidationTest {
    private EmailValidator emailValidator = new EmailValidatorImpl();

    @ParameterizedTest
    @ValueSource(strings = {"username@domain.com", "user_name@xyz.com", "null", "", "username.@domain.com", "username@.com"})
    void checkEmail(String email) {
        emailValidator.emailValidator(email);
    }

}
