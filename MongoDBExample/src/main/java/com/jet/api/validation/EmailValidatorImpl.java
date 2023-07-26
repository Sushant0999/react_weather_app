package com.jet.api.validation;

import com.jet.api.exception.CustomException;

import java.util.regex.Pattern;

public class EmailValidatorImpl implements EmailValidator {

    private final Pattern regex = Pattern.compile("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");

    @Override
    public boolean emailValidator(String email) {
        if(email.isEmpty() || email.isBlank() || email.equals("null")){
            throw new CustomException("INVALID EMAIL");
        }
        return regex.matcher(email).matches();
    }
}
