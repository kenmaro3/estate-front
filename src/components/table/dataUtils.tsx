export const convert_en_to_jp = (x: string) => {
    return en_to_jp.get(x)
}

export const en_col = [
    "category",
    "name",
    "price",
    "address",
    "ku",
    "line",
    "nearest_station",
    "walk",
    "bus",
    "land_area",
    "building_area",
    "balcony",
    "structure",
    "year",
    "management_fee",
    "accumulate_fee",
    "accumulate_fee2",
    "stairs",
    "facing",
    "reform",
    "land_right",
    "parking",
    "completion",
    "link",
    "land_area_tsubo",
    "building_area_tsubo",
    "tsubo_tanka",
]


export const en_to_jp = new Map<string, string>([
    ["category", "カテゴリ"], ["name", "物件名"],
    ["price", "販売価格"],
    ["address", "所在地"],
    ["ku", "区"],
    ["line", "沿線"],
    ["nearest_station", "最寄駅"],
    ["walk", "徒歩（分）"],
    ["bus", "バス（分）"],
    ["land_area", "土地面積"],
    ["building_area", "建物面積"],
    ["balcony", "バルコニー"],
    ["structure", "間取り"],
    ["year", "築年数"],
    ["management_fee", "管理費"],
    ["accumulate_fee", "修繕積立金"],
    ["accumulate_fee2", "修繕積立基金"],
    ["stairs", "所在階"],
    ["facing", "向き"],
    ["reform", "リフォーム"],
    ["land_right", "敷地の権利形態"],
    ["parking", "駐車場"],
    ["completion", "完成時期(築年月)"],
    ["link", "リンク"],
    ["land_area_tsubo", "土地面積（坪）"],
    ["building_area_tsubo", "建物面積（坪）"],
    ["tsubo_tanka", "坪単価"],
])

export const propertyColumns = [
    {
        Header: convert_en_to_jp("name"),
        accessor: 'name',
    },
    {
        Header: convert_en_to_jp("price"),
        accessor: 'price',
    },
    {
        Header: convert_en_to_jp("address"),
        accessor: 'address',
    },
    {
        Header: convert_en_to_jp("ku"),
        accessor: 'ku',
        width: 100,
    },
    {
        Header: convert_en_to_jp("line"),
        accessor: 'line',
        width: 100,
    },
    {
        Header: convert_en_to_jp("land_area_tsubo"),
        accessor: 'land_area_tsubo',
        width: 100,
    },
    {
        Header: convert_en_to_jp("building_area_tsubo"),
        accessor: 'building_area_tsubo',
        width: 100,
    },
    {
        Header: convert_en_to_jp("tsubo_tanka"),
        accessor: 'tsubo_tanka',
        width: 100,
    },
    {
        Header: convert_en_to_jp("nearest_station"),
        accessor: 'nearest_station',
        width: 100,
    },
    {
        Header: convert_en_to_jp("walk"),
        accessor: 'walk',
        width: 100,
    },
    {
        Header: convert_en_to_jp("bus"),
        accessor: 'bus',
        width: 100,
    },
    {
        Header: convert_en_to_jp("land_area"),
        accessor: 'land_area',
        width: 100,
    },
    {
        Header: convert_en_to_jp("building_area"),
        accessor: 'building_area',
        width: 100,
    },
    {
        Header: convert_en_to_jp("balcony"),
        accessor: 'balcony',
        width: 100,
    },
    {
        Header: convert_en_to_jp("structure"),
        accessor: 'structure',
        width: 100,
    },
    {
        Header: convert_en_to_jp("year"),
        accessor: 'year',
        width: 100,
    },
    {
        Header: convert_en_to_jp("management_fee"),
        accessor: 'management_fee',
        width: 100,
    },
    {
        Header: convert_en_to_jp("accumulate_fee"),
        accessor: 'accumulate_fee',
        width: 100,
    },
    {
        Header: convert_en_to_jp("accumulate_fee2"),
        accessor: 'accumulate_fee2',
        width: 100,
    },
    {
        Header: convert_en_to_jp("stairs"),
        accessor: 'stairs',
        width: 100,
    },
    {
        Header: convert_en_to_jp("facing"),
        accessor: 'facing',
        width: 100,
    },
    {
        Header: convert_en_to_jp("reform"),
        accessor: 'reform',
        width: 100,
    },
    {
        Header: convert_en_to_jp("land_right"),
        accessor: 'land_right',
        width: 100,
    },
    {
        Header: convert_en_to_jp("parking"),
        accessor: 'parking',
        width: 100,
    },
    {
        Header: convert_en_to_jp("completion"),
        accessor: 'completion',
        width: 100,
    },
    {
        Header: convert_en_to_jp("link"),
        accessor: 'link',
        render: (value: any, row: any, index: any) => <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>,
    },
];