const colorData = [
    {
        code: "1000",
        name: "Green beige",
        rgb: "205-186-136",
        hex: "#CDBA88"
    },
    {
        code: "1001",
        name: "Beige",
        rgb: "208-176-132",
        hex: "#D0B084"
    },
    {
        code: "1002",
        name: "Sand yellow",
        rgb: "210-170-109",
        hex: "#D2AA6D"
    },
    {
        code: "1003",
        name: "Signal yellow",
        rgb: "249-168-0",
        hex: "#F9A800"
    },
    {
        code: "1004",
        name: "Golden yellow",
        rgb: "228-158-0",
        hex: "#E49E00"
    },
    {
        code: "1005",
        name: "Honey yellow",
        rgb: "203-142-0",
        hex: "#CB8E00"
    },
    {
        code: "1006",
        name: "Maize yellow",
        rgb: "226-144-0",
        hex: "#E29000"
    },
    {
        code: "1007",
        name: "Daffodil yellow",
        rgb: "232-140-0",
        hex: "#E88C00"
    },
    {
        code: "1011",
        name: "Brown beige",
        rgb: "175-128-79",
        hex: "#AF804F"
    },
    {
        code: "1012",
        name: "Lemon yellow",
        rgb: "221-175-39",
        hex: "#DDAF27"
    },
    {
        code: "1013",
        name: "Oyster white",
        rgb: "227-217-198",
        hex: "#E3D9C6"
    },
    {
        code: "1014",
        name: "Ivory",
        rgb: "221-196-154",
        hex: "#DDC49A"
    },
    {
        code: "1015",
        name: "Light ivory",
        rgb: "230-210-181",
        hex: "#E6D2B5"
    },
    {
        code: "1016",
        name: "Sulfur yellow",
        rgb: "241-221-56",
        hex: "#F1DD38"
    },
    {
        code: "1017",
        name: "Saffron yellow",
        rgb: "246-169-80",
        hex: "#F6A950"
    },
    {
        code: "1018",
        name: "Zinc yellow",
        rgb: "250-202-48",
        hex: "#FACA30"
    },
    {
        code: "1019",
        name: "Grey beige",
        rgb: "164-143-122",
        hex: "#A48F7A"
    },
    {
        code: "1020",
        name: "Olive yellow",
        rgb: "160-143-101",
        hex: "#A08F65"
    },
    {
        code: "1021",
        name: "Colza yellow",
        rgb: "246-182-0",
        hex: "#F6B600"
    },
    {
        code: "1023",
        name: "Traffic yellow",
        rgb: "247-181-0",
        hex: "#F7B500"
    },
    {
        code: "1024",
        name: "Ochre yellow",
        rgb: "186-143-76",
        hex: "#BA8F4C"
    },
    {
        code: "1026",
        name: "Luminous yellow",
        rgb: "255-255-0",
        hex: "#FFFF00"
    },
    {
        code: "1027",
        name: "Curry",
        rgb: "167-127-14",
        hex: "#A77F0E"
    },
    {
        code: "1028",
        name: "Melon yellow",
        rgb: "255-155-0",
        hex: "#FF9B00"
    },
    {
        code: "1032",
        name: "Broom yellow",
        rgb: "226-163-0",
        hex: "#E2A300"
    },
    {
        code: "1033",
        name: "Dahlia yellow",
        rgb: "249-154-28",
        hex: "#F99A1C"
    },
    {
        code: "1034",
        name: "Pastel yellow",
        rgb: "235-156-82",
        hex: "#EB9C52"
    },
    {
        code: "1035",
        name: "Pearl beige",
        rgb: "144-131-112",
        hex: "#908370"
    },
    {
        code: "1036",
        name: "Pearl gold",
        rgb: "128-100-63",
        hex: "#80643F"
    },
    {
        code: "1037",
        name: "Sun yellow",
        rgb: "240-146-0",
        hex: "#F09200"
    },
    {
        code: "2000",
        name: "Yellow orange",
        rgb: "218-110-0",
        hex: "#DA6E00"
    },
    {
        code: "2001",
        name: "Red orange",
        rgb: "186-72-27",
        hex: "#BA481B"
    },
    {
        code: "2002",
        name: "Vermilion",
        rgb: "191-57-34",
        hex: "#BF3922"
    },
    {
        code: "2003",
        name: "Pastel orange",
        rgb: "246-120-40",
        hex: "#F67828"
    },
    {
        code: "2004",
        name: "Pure orange",
        rgb: "226-83-3",
        hex: "#E25303"
    },
    {
        code: "2005",
        name: "Luminous orange",
        rgb: "255-77-6",
        hex: "#FF4D06"
    },
    {
        code: "2007",
        name: "Luminous bright orange",
        rgb: "255-178-0",
        hex: "#FFB200"
    },
    {
        code: "2008",
        name: "Bright red orange",
        rgb: "237-107-33",
        hex: "#ED6B21"
    },
    {
        code: "2009",
        name: "Traffic orange",
        rgb: "222-83-7",
        hex: "#DE5307"
    },
    {
        code: "2010",
        name: "Signal orange",
        rgb: "208-93-40",
        hex: "#D05D28"
    },
    {
        code: "2011",
        name: "Deep orange",
        rgb: "226-110-14",
        hex: "#E26E0E"
    },
    {
        code: "2012",
        name: "Salmon orange",
        rgb: "213-101-77",
        hex: "#D5654D"
    },
    {
        code: "2013",
        name: "Pearl orange",
        rgb: "146-62-37",
        hex: "#923E25"
    },
    {
        code: "3000",
        name: "Flame red",
        rgb: "167-41-32",
        hex: "#A72920"
    },
    {
        code: "3001",
        name: "Signal red",
        rgb: "155-36-35",
        hex: "#9B2423"
    },
    {
        code: "3002",
        name: "Carmine red",
        rgb: "155-35-33",
        hex: "#9B2321"
    },
    {
        code: "3003",
        name: "Ruby red",
        rgb: "134-26-34",
        hex: "#861A22"
    },
    {
        code: "3004",
        name: "Purple red",
        rgb: "107-28-35",
        hex: "#6B1C23"
    },
    {
        code: "3005",
        name: "Wine red",
        rgb: "89-25-31",
        hex: "#59191F"
    },
    {
        code: "3007",
        name: "Black red",
        rgb: "62-32-34",
        hex: "#3E2022"
    },
    {
        code: "3009",
        name: "Oxide red",
        rgb: "109-52-45",
        hex: "#6D342D"
    },
    {
        code: "3011",
        name: "Brown red",
        rgb: "121-36-35",
        hex: "#792423"
    },
    {
        code: "3012",
        name: "Beige red",
        rgb: "198-132-109",
        hex: "#C6846D"
    },
    {
        code: "3013",
        name: "Tomato red",
        rgb: "151-46-37",
        hex: "#972E25"
    },
    {
        code: "3014",
        name: "Antique pink",
        rgb: "203-115-117",
        hex: "#CB7375"
    },
    {
        code: "3015",
        name: "Light pink",
        rgb: "216-160-166",
        hex: "#D8A0A6"
    },
    {
        code: "3016",
        name: "Coral red",
        rgb: "166-61-47",
        hex: "#A63D2F"
    },
    {
        code: "3017",
        name: "Rose",
        rgb: "203-85-93",
        hex: "#CB555D"
    },
    {
        code: "3018",
        name: "Strawberry red",
        rgb: "199-63-74",
        hex: "#C73F4A"
    },
    {
        code: "3020",
        name: "Traffic red",
        rgb: "187-30-16",
        hex: "#BB1E10"
    },
    {
        code: "3022",
        name: "Salmon pink",
        rgb: "207-105-85",
        hex: "#CF6955"
    },
    {
        code: "3024",
        name: "Luminous red",
        rgb: "255-45-33",
        hex: "#FF2D21"
    },
    {
        code: "3026",
        name: "Luminous bright red",
        rgb: "255-42-27",
        hex: "#FF2A1B"
    },
    {
        code: "3027",
        name: "Raspberry red",
        rgb: "171-39-60",
        hex: "#AB273C"
    },
    {
        code: "3028",
        name: "Pure red",
        rgb: "204-44-36",
        hex: "#CC2C24"
    },
    {
        code: "3031",
        name: "Orient red",
        rgb: "166-52-55",
        hex: "#A63437"
    },
    {
        code: "3032",
        name: "Pearl ruby red",
        rgb: "112-29-35",
        hex: "#701D23"
    },
    {
        code: "3033",
        name: "Pearl pink",
        rgb: "165-58-45",
        hex: "#A53A2D"
    },
    {
        code: "4001",
        name: "Red lilac",
        rgb: "129-97-131",
        hex: "#816183"
    },
    {
        code: "4002",
        name: "Red violet",
        rgb: "141-60-75",
        hex: "#8D3C4B"
    },
    {
        code: "4003",
        name: "Heather violet",
        rgb: "196-97-140",
        hex: "#C4618C"
    },
    {
        code: "4004",
        name: "Claret violet",
        rgb: "101-30-56",
        hex: "#651E38"
    },
    {
        code: "4005",
        name: "Blue lilac",
        rgb: "118-104-154",
        hex: "#76689A"
    },
    {
        code: "4006",
        name: "Traffic purple",
        rgb: "144-51-115",
        hex: "#903373"
    },
    {
        code: "4007",
        name: "Purple violet",
        rgb: "71-36-60",
        hex: "#47243C"
    },
    {
        code: "4008",
        name: "Signal violet",
        rgb: "132-76-130",
        hex: "#844C82"
    },
    {
        code: "4009",
        name: "Pastel violet",
        rgb: "157-134-146",
        hex: "#9D8692"
    },
    {
        code: "4010",
        name: "Telemagenta",
        rgb: "188-64-119",
        hex: "#BC4077"
    },
    {
        code: "4011",
        name: "Pearl violet",
        rgb: "110-99-135",
        hex: "#6E6387"
    },
    {
        code: "4012",
        name: "Pearl blackberry",
        rgb: "107-107-127",
        hex: "#6B6B7F"
    },
    {
        code: "5000",
        name: "Violet blue",
        rgb: "49-79-111",
        hex: "#314F6F"
    },
    {
        code: "5001",
        name: "Green blue",
        rgb: "15-76-100",
        hex: "#0F4C64"
    },
    {
        code: "5002",
        name: "Ultramarine blue",
        rgb: "0-56-123",
        hex: "#00387B"
    },
    {
        code: "5003",
        name: "Sapphire blue",
        rgb: "31-56-85",
        hex: "#1F3855"
    },
    {
        code: "5004",
        name: "Black blue",
        rgb: "25-30-40",
        hex: "#191E28"
    },
    {
        code: "5005",
        name: "Signal blue",
        rgb: "0-83-135",
        hex: "#005387"
    },
    {
        code: "5007",
        name: "Brilliant blue",
        rgb: "55-107-140",
        hex: "#376B8C"
    },
    {
        code: "5008",
        name: "Grey blue",
        rgb: "43-58-68",
        hex: "#2B3A44"
    },
    {
        code: "5009",
        name: "Azure blue",
        rgb: "34-95-120",
        hex: "#225F78"
    },
    {
        code: "5010",
        name: "Gentian blue",
        rgb: "0-79-124",
        hex: "#004F7C"
    },
    {
        code: "5011",
        name: "Steel blue",
        rgb: "26-43-60",
        hex: "#1A2B3C"
    },
    {
        code: "5012",
        name: "Light blue",
        rgb: "0-137-182",
        hex: "#0089B6"
    },
    {
        code: "5013",
        name: "Cobalt blue",
        rgb: "25-49-83",
        hex: "#193153"
    },
    {
        code: "5014",
        name: "Pigeon blue",
        rgb: "99-125-150",
        hex: "#637D96"
    },
    {
        code: "5015",
        name: "Sky blue",
        rgb: "0-124-176",
        hex: "#007CB0"
    },
    {
        code: "5017",
        name: "Traffic blue",
        rgb: "0-91-140",
        hex: "#005B8C"
    },
    {
        code: "5018",
        name: "Turquoise blue",
        rgb: "5-139-140",
        hex: "#058B8C"
    },
    {
        code: "5019",
        name: "Capri blue",
        rgb: "0-94-131",
        hex: "#005E83"
    },
    {
        code: "5020",
        name: "Ocean blue",
        rgb: "0-65-75",
        hex: "#00414B"
    },
    {
        code: "5021",
        name: "Water blue",
        rgb: "0-117-119",
        hex: "#007577"
    },
    {
        code: "5022",
        name: "Night blue",
        rgb: "34-45-90",
        hex: "#222D5A"
    },
    {
        code: "5023",
        name: "Distant blue",
        rgb: "66-105-140",
        hex: "#42698C"
    },
    {
        code: "5024",
        name: "Pastel blue",
        rgb: "96-147-172",
        hex: "#6093AC"
    },
    {
        code: "5025",
        name: "Pearl gentian blue",
        rgb: "33-105-124",
        hex: "#21697C"
    },
    {
        code: "5026",
        name: "Pearl night blue",
        rgb: "15-48-82",
        hex: "#0F3052"
    },
    {
        code: "6000",
        name: "Patina green",
        rgb: "60-116-96",
        hex: "#3C7460"
    },
    {
        code: "6001",
        name: "Emerald green",
        rgb: "54-103-53",
        hex: "#366735"
    },
    {
        code: "6002",
        name: "Leaf green",
        rgb: "50-89-40",
        hex: "#325928"
    },
    {
        code: "6003",
        name: "Olive green",
        rgb: "80-83-60",
        hex: "#50533C"
    },
    {
        code: "6004",
        name: "Blue green",
        rgb: "2-68-66",
        hex: "#024442"
    },
    {
        code: "6005",
        name: "Moss green",
        rgb: "17-66-50",
        hex: "#114232"
    },
    {
        code: "6006",
        name: "Grey olive",
        rgb: "60-57-46",
        hex: "#3C392E"
    },
    {
        code: "6007",
        name: "Bottle green",
        rgb: "44-50-34",
        hex: "#2C3222"
    },
    {
        code: "6008",
        name: "Brown green",
        rgb: "55-52-42",
        hex: "#37342A"
    },
    {
        code: "6009",
        name: "Fir green",
        rgb: "39-53-42",
        hex: "#27352A"
    },
    {
        code: "6010",
        name: "Grass green",
        rgb: "77-111-57",
        hex: "#4D6F39"
    },
    {
        code: "6011",
        name: "Reseda green",
        rgb: "108-124-89",
        hex: "#6C7C59"
    },
    {
        code: "6012",
        name: "Black green",
        rgb: "48-61-58",
        hex: "#303D3A"
    },
    {
        code: "6013",
        name: "Reed green",
        rgb: "125-118-90",
        hex: "#7D765A"
    },
    {
        code: "6014",
        name: "Yellow olive",
        rgb: "71-65-53",
        hex: "#474135"
    },
    {
        code: "6015",
        name: "Black olive",
        rgb: "61-61-54",
        hex: "#3D3D36"
    },
    {
        code: "6016",
        name: "Turquoise green",
        rgb: "0-105-76",
        hex: "#00694C"
    },
    {
        code: "6017",
        name: "May green",
        rgb: "88-127-64",
        hex: "#587F40"
    },
    {
        code: "6018",
        name: "Yellow green",
        rgb: "97-153-59",
        hex: "#61993B"
    },
    {
        code: "6019",
        name: "Pastel green",
        rgb: "185-206-172",
        hex: "#B9CEAC"
    },
    {
        code: "6020",
        name: "Chrome green",
        rgb: "55-66-47",
        hex: "#37422F"
    },
    {
        code: "6021",
        name: "Pale green",
        rgb: "138-153-119",
        hex: "#8A9977"
    },
    {
        code: "6022",
        name: "Olive drab",
        rgb: "58-51-39",
        hex: "#3A3327"
    },
    {
        code: "6024",
        name: "Traffic green",
        rgb: "0-131-81",
        hex: "#008351"
    },
    {
        code: "6025",
        name: "Fern green",
        rgb: "94-110-59",
        hex: "#5E6E3B"
    },
    {
        code: "6026",
        name: "Opal green",
        rgb: "0-95-78",
        hex: "#005F4E"
    },
    {
        code: "6027",
        name: "Light green",
        rgb: "126-186-181",
        hex: "#7EBAB5"
    },
    {
        code: "6028",
        name: "Pine green",
        rgb: "49-84-66",
        hex: "#315442"
    },
    {
        code: "6029",
        name: "Mint green",
        rgb: "0-111-61",
        hex: "#006F3D"
    },
    {
        code: "6032",
        name: "Signal green",
        rgb: "35-127-82",
        hex: "#237F52"
    },
    {
        code: "6033",
        name: "Mint turquoise",
        rgb: "70-135-127",
        hex: "#46877F"
    },
    {
        code: "6034",
        name: "Pastel turquoise",
        rgb: "122-172-172",
        hex: "#7AACAC"
    },
    {
        code: "6035",
        name: "Pearl green",
        rgb: "25-77-37",
        hex: "#194D25"
    },
    {
        code: "6036",
        name: "Pearl opal green",
        rgb: "4-87-75",
        hex: "#04574B"
    },
    {
        code: "6037",
        name: "Pure green",
        rgb: "0-139-41",
        hex: "#008B29"
    },
    {
        code: "6038",
        name: "Luminous green",
        rgb: "0-181-26",
        hex: "#00B51A"
    },
    {
        code: "7000",
        name: "Squirrel grey",
        rgb: "122-136-142",
        hex: "#7A888E"
    },
    {
        code: "7001",
        name: "Silver grey",
        rgb: "140-150-157",
        hex: "#8C969D"
    },
    {
        code: "7002",
        name: "Olive grey",
        rgb: "129-120-99",
        hex: "#817863"
    },
    {
        code: "7003",
        name: "Moss grey",
        rgb: "122-118-105",
        hex: "#7A7669"
    },
    {
        code: "7004",
        name: "Signal grey",
        rgb: "155-155-155",
        hex: "#9B9B9B"
    },
    {
        code: "7005",
        name: "Mouse grey",
        rgb: "108-110-107",
        hex: "#6C6E6B"
    },
    {
        code: "7006",
        name: "Beige grey",
        rgb: "118-106-94",
        hex: "#766A5E"
    },
    {
        code: "7008",
        name: "Khaki grey",
        rgb: "116-94-61",
        hex: "#745E3D"
    },
    {
        code: "7009",
        name: "Green grey",
        rgb: "93-96-88",
        hex: "#5D6058"
    },
    {
        code: "7010",
        name: "Tarpaulin grey",
        rgb: "88-92-86",
        hex: "#585C56"
    },
    {
        code: "7011",
        name: "Iron grey",
        rgb: "82-89-93",
        hex: "#52595D"
    },
    {
        code: "7012",
        name: "Basalt grey",
        rgb: "87-93-94",
        hex: "#575D5E"
    },
    {
        code: "7013",
        name: "Brown grey",
        rgb: "87-80-68",
        hex: "#575044"
    },
    {
        code: "7015",
        name: "Slate grey",
        rgb: "79-83-88",
        hex: "#4F5358"
    },
    {
        code: "7016",
        name: "Anthracite grey",
        rgb: "56-62-66",
        hex: "#383E42"
    },
    {
        code: "7021",
        name: "Black grey",
        rgb: "47-50-52",
        hex: "#2F3234"
    },
    {
        code: "7022",
        name: "Umbra grey",
        rgb: "76-74-68",
        hex: "#4C4A44"
    },
    {
        code: "7023",
        name: "Concrete grey",
        rgb: "128-128-118",
        hex: "#808076"
    },
    {
        code: "7024",
        name: "Graphite grey",
        rgb: "69-73-78",
        hex: "#45494E"
    },
    {
        code: "7026",
        name: "Granite grey",
        rgb: "55-67-69",
        hex: "#374345"
    },
    {
        code: "7030",
        name: "Stone grey",
        rgb: "146-142-133",
        hex: "#928E85"
    },
    {
        code: "7031",
        name: "Blue grey",
        rgb: "91-104-109",
        hex: "#5B686D"
    },
    {
        code: "7032",
        name: "Pebble grey",
        rgb: "181-176-161",
        hex: "#B5B0A1"
    },
    {
        code: "7033",
        name: "Cement grey",
        rgb: "127-130-116",
        hex: "#7F8274"
    },
    {
        code: "7034",
        name: "Yellow grey",
        rgb: "146-136-111",
        hex: "#92886F"
    },
    {
        code: "7035",
        name: "Light grey",
        rgb: "197-199-196",
        hex: "#C5C7C4"
    },
    {
        code: "7036",
        name: "Platinum grey",
        rgb: "151-147-146",
        hex: "#979392"
    },
    {
        code: "7037",
        name: "Dusty grey",
        rgb: "122-123-122",
        hex: "#7A7B7A"
    },
    {
        code: "7038",
        name: "Agate grey",
        rgb: "176-176-169",
        hex: "#B0B0A9"
    },
    {
        code: "7039",
        name: "Quartz grey",
        rgb: "107-102-94",
        hex: "#6B665E"
    },
    {
        code: "7040",
        name: "Window grey",
        rgb: "152-158-161",
        hex: "#989EA1"
    },
    {
        code: "7042",
        name: "Traffic grey A",
        rgb: "142-146-145",
        hex: "#8E9291"
    },
    {
        code: "7043",
        name: "Traffic grey B",
        rgb: "79-82-80",
        hex: "#4F5250"
    },
    {
        code: "7044",
        name: "Silk grey",
        rgb: "183-179-168",
        hex: "#B7B3A8"
    },
    {
        code: "7045",
        name: "Telegrey 1",
        rgb: "141-146-149",
        hex: "#8D9295"
    },
    {
        code: "7046",
        name: "Telegrey 2",
        rgb: "127-134-138",
        hex: "#7F868A"
    },
    {
        code: "7047",
        name: "Telegrey 4",
        rgb: "200-200-199",
        hex: "#C8C8C7"
    },
    {
        code: "7048",
        name: "Pearl mouse grey",
        rgb: "129-123-115",
        hex: "#817B73"
    },
    {
        code: "8000",
        name: "Green brown",
        rgb: "137-105-62",
        hex: "#89693E"
    },
    {
        code: "8001",
        name: "Ochre brown",
        rgb: "157-98-43",
        hex: "#9D622B"
    },
    {
        code: "8002",
        name: "Signal brown",
        rgb: "121-77-62",
        hex: "#794D3E"
    },
    {
        code: "8003",
        name: "Clay brown",
        rgb: "126-75-38",
        hex: "#7E4B26"
    },
    {
        code: "8004",
        name: "Copper brown",
        rgb: "141-73-49",
        hex: "#8D4931"
    },
    {
        code: "8007",
        name: "Fawn brown",
        rgb: "112-69-42",
        hex: "#70452A"
    },
    {
        code: "8008",
        name: "Olive brown",
        rgb: "114-74-37",
        hex: "#724A25"
    },
    {
        code: "8011",
        name: "Nut brown",
        rgb: "90-56-38",
        hex: "#5A3826"
    },
    {
        code: "8012",
        name: "Red brown",
        rgb: "102-51-43",
        hex: "#66332B"
    },
    {
        code: "8014",
        name: "Sepia brown",
        rgb: "74-53-38",
        hex: "#4A3526"
    },
    {
        code: "8015",
        name: "Chestnut brown",
        rgb: "94-47-38",
        hex: "#5E2F26"
    },
    {
        code: "8016",
        name: "Mahogany brown",
        rgb: "76-43-32",
        hex: "#4C2B20"
    },
    {
        code: "8017",
        name: "Chocolate brown",
        rgb: "68-47-41",
        hex: "#442F29"
    },
    {
        code: "8019",
        name: "Grey brown",
        rgb: "61-54-53",
        hex: "#3D3635"
    },
    {
        code: "8022",
        name: "Black brown",
        rgb: "26-23-24",
        hex: "#1A1718"
    },
    {
        code: "8023",
        name: "Orange brown",
        rgb: "164-87-41",
        hex: "#A45729"
    },
    {
        code: "8024",
        name: "Beige brown",
        rgb: "121-80-56",
        hex: "#795038"
    },
    {
        code: "8025",
        name: "Pale brown",
        rgb: "117-88-71",
        hex: "#755847"
    },
    {
        code: "8028",
        name: "Terra brown",
        rgb: "81-58-42",
        hex: "#513A2A"
    },
    {
        code: "8029",
        name: "Pearl copper",
        rgb: "127-64-49",
        hex: "#7F4031"
    },
    {
        code: "9001",
        name: "Cream",
        rgb: "233-224-210",
        hex: "#E9E0D2"
    },
    {
        code: "9002",
        name: "Grey white",
        rgb: "215-213-203",
        hex: "#D7D5CB"
    },
    {
        code: "9003",
        name: "Signal white",
        rgb: "236-236-231",
        hex: "#ECECE7"
    },
    {
        code: "9004",
        name: "Signal black",
        rgb: "43-43-44",
        hex: "#2B2B2C"
    },
    {
        code: "9005",
        name: "Jet black",
        rgb: "14-14-16",
        hex: "#0E0E10"
    },
    {
        code: "9006",
        name: "White aluminium",
        rgb: "161-161-160",
        hex: "#A1A1A0"
    },
    {
        code: "9007",
        name: "Grey aluminium",
        rgb: "135-133-129",
        hex: "#878581"
    },
    {
        code: "9010",
        name: "Pure white",
        rgb: "241-236-225",
        hex: "#F1ECE1"
    },
    {
        code: "9011",
        name: "Graphite black",
        rgb: "39-41-43",
        hex: "#27292B"
    },
    {
        code: "9016",
        name: "Traffic white",
        rgb: "241-240-234",
        hex: "#F1F0EA"
    },
    {
        code: "9017",
        name: "Traffic black",
        rgb: "42-41-42",
        hex: "#2A292A"
    },
    {
        code: "9018",
        name: "Papyrus white",
        rgb: "200-203-196",
        hex: "#C8CBC4"
    },
    {
        code: "9022",
        name: "Pearl light grey",
        rgb: "133-133-131",
        hex: "#858583"
    },
    {
        code: "9023",
        name: "Pearl dark grey",
        rgb: "121-123-122",
        hex: "#797B7A"
    },
];

export default colorData;