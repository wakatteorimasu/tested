[
	{
		"id": "961aee4f-d869-41fd-a81b-4757133b9804",
		"title": "テスト"
	},
	{
		"id": "f6ad723a-0c87-49c4-a90a-7c245a2c187d",
		"title": "ああ"
	},
	{
		"id": "ce2b8f6f-f976-4719-acc5-99ee5528d79a",
		"title": "みんながんばろう"
	},
	{
		"id": "30d1ab0c-89d1-4253-b5d2-8adf134ed463",
		"title": "みんながんばろう"
	},
	{
		"id": "2914b249-1fb3-4cfc-bc7e-ba1b5cbaecdc",
		"title": "テスト"
	},
	{
		"id": "6338b5c8-e8ed-4991-b29e-bd40431d0f75",
		"title": "TEST1"
	},
	{
		"id": "e246a842-5d22-4e49-8d2a-7591b72c1acf",
		"title": "こんにちは"
	},
	{
		"id": "5968b321-4b2b-492d-8079-b382e8133237",
		"title": "TEST2"
	},
	{
		"id": "eb010bdf-b164-49cf-a5ef-9af71c9cc18b",
		"title": "TEST"
	},
	{
		"id": "9454d566-2de2-4d25-b0c3-255cae848fe7",
		"title": "hello"
	}
]

fetch("data.json");
.then((data) => data.json())
.then((res) => console.log(res))