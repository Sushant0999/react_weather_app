package com.jet.api.validation;

import com.jet.api.enums.UsernameEnum;

import java.util.regex.Pattern;


public class UserNameValidatorImpl implements UserNameValidator {

    final Pattern pattern = Pattern.compile("^[A-Za-z0-9_]{5,20}$");

    @Override
    public boolean userNameCheck(String username) {
        System.out.println(username);
        return username != null && pattern.matcher(username).matches();
    }
}
