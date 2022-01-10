describe('async stubbing', () => {
  beforeEach(() => {
    cy.intercept('get', 'http://localhost:8080/api/v1/countries', {
      statusCode: 200,
      body: [{
        "id": "f830aa92-ec9c-4b14-a84c-c06a06174dbb",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "AO",
        "name": "Angola",
        "latitude": "-11.20",
        "longitude": "17.87",
        "flag_path": "./assets/flags/ao.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }, {
        "id": "daaf3c16-a1f3-457d-922a-97f9e8fa0f17",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "BF",
        "name": "Burkina Faso",
        "latitude": "12.24",
        "longitude": "-1.56",
        "flag_path": "./assets/flags/bf.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "5f01f330-e547-401c-a230-d326c7de0db5",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Eastern Africa"
            ]
        },
        "code": "BI",
        "name": "Burundi",
        "latitude": "-3.37",
        "longitude": "29.92",
        "flag_path": "./assets/flags/bi.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "086ad08d-3bd8-4c46-a0a5-ec9b686c4a7f",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "BJ",
        "name": "Benin",
        "latitude": "9.31",
        "longitude": "2.32",
        "flag_path": "./assets/flags/bj.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "1ffd28d9-646f-4fc4-9ba2-08d27962b4bb",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Southern Africa"
            ]
        },
        "code": "BW",
        "name": "Botswana",
        "latitude": "-22.33",
        "longitude": "24.68",
        "flag_path": "./assets/flags/bw.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "bfa072ca-5698-47c1-b04e-863854c18c86",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "CD",
        "name": "Congo [DRC]",
        "latitude": "-4.04",
        "longitude": "21.76",
        "flag_path": "./assets/flags/cd.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "f51483ff-2870-4ce3-8868-e8d5b18b59a2",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "CF",
        "name": "Central African Republic",
        "latitude": "6.61",
        "longitude": "20.94",
        "flag_path": "./assets/flags/cf.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },
    {
        "id": "34f5fe16-3966-4ab6-95ec-719d0d4a01ea",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "CG",
        "name": "Congo [Republic]",
        "latitude": "-0.23",
        "longitude": "15.83",
        "flag_path": "./assets/flags/cg.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "bf5c2fc6-d39a-4463-9178-3cc79daa163c",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "CI",
        "name": "Côte d'Ivoire",
        "latitude": "7.54",
        "longitude": "-5.55",
        "flag_path": "./assets/flags/ci.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }, {
        "id": "f46ca99a-a6f2-4368-8396-e879e42db76e",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "CM",
        "name": "Cameroon",
        "latitude": "7.37",
        "longitude": "12.35",
        "flag_path": "./assets/flags/cm.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "b0919c26-dc05-4d2d-901e-c11a5fefda19",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "CV",
        "name": "Cape Verde",
        "latitude": "16.00",
        "longitude": "-24.01",
        "flag_path": "./assets/flags/cv.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "16c0facd-d306-4185-8f7d-5848c47149c9",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Eastern Africa"
            ]
        },
        "code": "DJ",
        "name": "Djibouti",
        "latitude": "11.83",
        "longitude": "42.59",
        "flag_path": "./assets/flags/dj.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "1c980abf-76e2-4009-87a3-5b9953665d6d",
        "regions": {
            "data": [
                "Africa",
                "Northern Africa"
            ]
        },
        "code": "DZ",
        "name": "Algeria",
        "latitude": "28.03",
        "longitude": "1.66",
        "flag_path": "./assets/flags/dz.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }, {
        "id": "089cb1c0-a3b2-4980-9228-219ca3fc5bd2",
        "regions": {
            "data": [
                "Africa",
                "Northern Africa"
            ]
        },
        "code": "EG",
        "name": "Egypt",
        "latitude": "26.82",
        "longitude": "30.80",
        "flag_path": "./assets/flags/eg.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }, {
        "id": "af56d3b6-1bb1-497a-9852-9a7b1915134e",
        "regions": {
            "data": [
                "Africa",
                "Northern Africa"
            ]
        },
        "code": "EH",
        "name": "Western Sahara",
        "latitude": "24.22",
        "longitude": "-12.89",
        "flag_path": "./assets/flags/eh.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },
    {
        "id": "9879ac59-121f-4de9-9789-c823e4196309",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Eastern Africa"
            ]
        },
        "code": "ER",
        "name": "Eritrea",
        "latitude": "15.18",
        "longitude": "39.78",
        "flag_path": "./assets/flags/er.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "ab498e40-d62c-4132-9941-b4070f466bef",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Eastern Africa"
            ]
        },
        "code": "ET",
        "name": "Ethiopia",
        "latitude": "9.15",
        "longitude": "40.49",
        "flag_path": "./assets/flags/et.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "e5770a53-35e5-47bf-ae43-694b4ba65c69",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Middle Africa"
            ]
        },
        "code": "GA",
        "name": "Gabon",
        "latitude": "-0.80",
        "longitude": "11.61",
        "flag_path": "./assets/flags/ga.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    },{
        "id": "f3891af0-777b-40f5-ace2-dec4a9a71db1",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "GH",
        "name": "Ghana",
        "latitude": "7.95",
        "longitude": "-1.02",
        "flag_path": "./assets/flags/gh.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }, {
        "id": "e63b54f0-ecc5-4238-90b0-538c2de7a999",
        "regions": {
            "data": [
                "Africa",
                "Sub-Saharan Africa",
                "Western Africa"
            ]
        },
        "code": "GM",
        "name": "Gambia",
        "latitude": "13.44",
        "longitude": "-15.31",
        "flag_path": "./assets/flags/gm.svg",
        "created_at": "2022-01-05T21:38:07.628Z",
        "updated_at": "2022-01-05T21:38:07.628Z"
    }]
  }).as('africa-abridged')
    cy.visit('http://localhost:3000/')
  })
  it('should be able to serve coordinates', () => {
    cy.get('.Home--link').contains('Africa').click();
    cy.get('.bingo-btn').click();
    cy.get('.square').contains(/Angola|Burundi/);
    cy.get('.square').contains(/Algeria|Ethiopia/);
  })
  it('should be able to serve coordinates', () => {
    cy.get('.Home--link').contains('Africa').click();
    cy.get('.bingo-btn').click();
    cy.get('.next-btn').click();
    cy.get('h3').contains(/S|N/)
    cy.get('h3').next().contains(/E|W/)
  })
})
