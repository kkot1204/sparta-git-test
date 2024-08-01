// let age = 25;
// let isMember = true;

// // 나이가 18세 이상이고 회원이어야 접근 가능
// if (age >= 18 && isMember === true) {
//     console.log("접근 허용");
// } else {
//     console.log("접근 불가");
// }




// let isNotLoggedIn = false;
// let isAdmin = true;

// // // 로그인 상태이거나 관리자여야 접근 가능
// // if (isNotLoggedIn === false || isAdmin) {
// //     console.log("관리자 페이지에 접근 가능");
// // } else {
// //     console.log("관리자 페이지에 접근 불가");
// // }




// // let isLoggedIn = false;
// // let isNotAdmin = true;

// // // 로그인 상태이거나 관리자여야 접근 가능
// // if () {
// //   console.log("관리자 페이지에 접근 가능");
// // } else {
// //   console.log("관리자 페이지에 접근 불가");
// // }




// let purchaseAmount = 150;
// let isGoldMember = false;
// let isSilverMember = true;

// // 구매 금액이 100 이상이고 골드 회원이거나 실버 회원이면 할인을 적용
// // 구매 금액이 100 이상이다
// // 골드 회원이거나 실버 회원이다 : isGoldMember === true || isSilverMember === true
// if ( purchaseAmount >= 100 && (isGoldMember === true || isSilverMember === true) ) {
//     console.log("할인 적용");
// } else {
//     console.log("할인 미적용");
// }


// // 중복 if문 사용

// if (purchaseAmount >= 100) {
//     // 여기서 체크
//     if (isGoldMember === true || isSilverMember === true) {
//         console.log("할인 적용");
//     }
// } else {
//     console.log("할인 미적용")
// }


// // forEach, map, filter
// // reture 값의 여부

// const fruits = ["사과", "오렌지", "포도"];
// const result = fruits.map(function (f) {
//     // 
// });



const 회원명부 = [
    {
      이름: "홍길동",
      나이: 25,
      성별: "male",
    },
    {
      이름: "홍길순",
      나이: 30,
      성별: "female",
    },
    {
      이름: "홍길자",
      나이: 40,
      성별: "female",
    },
  ];
  


  const filteredMembers  = 회원명부, filter(member => member.나이 > 35 && member.성별 === "female");
  console.log(filteredMembers);
  
  // filter 함수를 사용해서, 35세 이상의 사람 중 여자만 필터링. 


  const 필터링된회원명부 = 회원명부.filter(function (회원) {
    if (회원.나이 >=35 && 회원.성별 === "female") {
        reture true;
    } else {
        return false;
    }
  });