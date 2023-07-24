package com.jet.api.validation;

import java.util.regex.Pattern;

public class EmailValidatorImpl implements EmailValidator {

    private final Pattern regex = Pattern.compile("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");

    @Override
    public boolean emailValidator(String email) {
        return email != null && regex.matcher(email).matches();
    }
}
