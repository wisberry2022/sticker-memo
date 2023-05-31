package com.sticker.sticker.global.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeRequests()
                    .antMatchers("/login", "/authenticate", "/join").permitAll()
                    .antMatchers(HttpMethod.POST, "/doJoin").permitAll()
                    .antMatchers("/css/**").permitAll()
                    .antMatchers("/js/**").permitAll()
                    .anyRequest().authenticated()
                .and().formLogin()
                    .loginPage("/login")
                    .usernameParameter("id")
                    .passwordParameter("pwd")
                    .loginProcessingUrl("/authenticate")
                    .defaultSuccessUrl("/")
                .and()
                .logout()
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/login")
                    .and().csrf().disable()
                .build();
//        return http
//                                .authorizeRequests()
//                    .antMatchers("/login", "/authenticate").permitAll()
//                    .antMatchers("/css/**").permitAll()
//                    .antMatchers("/js/**").permitAll()
//                    .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                .loginProcessingUrl("/authenticate")
//                .defaultSuccessUrl("/")
//                .and().logout()
//                .logoutSuccessUrl("/login")
//                .and().build();
    }

}
