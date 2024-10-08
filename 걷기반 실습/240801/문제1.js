const grade = {
    국어: 90,
    영어: 80,
    수학: 100,
  };

  // 위의 것은 점수를 저장하는 객체이다. 
  // 여기서 'grade'는 각 과목의 점수를 저장하고 있다. 예를 들어 '국어' 점수는 90점이다. 
  
  // 논리 연산자(&& 또는 ||)를 활용하여 아래의 조건을 만족하는 코드를 작성해주세요.
  // 출력: true
  
  // 국어, 영어, 수학 점수가 모두 80점 이상이면 true, 아니면 false를 반환해주세요.
  // 이때 논리연산자 &&를 사용할 예정. 이 연산자는 모든 조건이 참('true')일 때만 참을 반환한다.
  // 이제 점수를 확인하는 함수를 만들어보자
  function checkGrade(grade) {
    // 여기에 코드를 작성해주세요!
    return grade.국어 >= 80 && grade.영어 >= 80 && grade.수학 >= 80;
  }
  
  console.log(checkGrade(grade));

// 