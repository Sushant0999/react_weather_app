package com.jet.api;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
class ApiApplicationTests {

    Calculator c = new Calculator();

    @Test
    void contextLoads() {
    }

    @Test
    void resultSum() {
        int expectedResult = 18;
        int actualResult = c.sum(6, 6, 6);
        assertThat(actualResult).isEqualTo(expectedResult);
    }

    @Test
    void resultMult() {
        int expectedResult = 36;
        int actualResult = c.multi(6, 6);
        assertThat(actualResult).isEqualTo(expectedResult);
    }


}
