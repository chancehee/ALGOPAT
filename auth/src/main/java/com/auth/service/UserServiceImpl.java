package com.auth.service;

import com.auth.dto.GithubUserResponseDTO;
import com.auth.dto.UserServiceIdRequestDTO;
import com.auth.dto.UserServiceIdResponseDTO;
import com.auth.service.feign.UserServiceFeignClient;
import feign.FeignException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
  private final UserServiceFeignClient userServiceFeignClient;
  @Override
  public UserServiceIdResponseDTO checkId(GithubUserResponseDTO gitHubUserResponseDTO) {
      log.info("start checkId");
      ResponseEntity<UserServiceIdResponseDTO> userServiceIdResponse = userServiceFeignClient.userCheck(UserServiceIdRequestDTO.builder().userGithubId(gitHubUserResponseDTO.getUserGithubId()).userImageUrl(
          gitHubUserResponseDTO.getUserImageUrl()).build());

      UserServiceIdResponseDTO userServiceIdResponseDTO = userServiceIdResponse.getBody();
      log.info("end checkId");
      return userServiceIdResponseDTO;
  }

}
