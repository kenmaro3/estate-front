import React, { useState, useEffect, FC, useMemo } from 'react'
import Sheet from 'sheet-happens'
import axios from "axios";
import Table from 'rc-table';
import { useTable, useSortBy } from "react-table";
import { columns, data } from "./mockdata"
import SortableTable from "../sortableTable/SortableTable"
import { Column } from 'react-table';
import { DataButton } from '../../types/data-button-type';
import PrimaryButton from '../../components/primaryButton';
import { PropertyData } from '../../types/property-type';
import { convert_en_to_jp } from './dataUtils';
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import "./table.scss"

//"minato", "shinagawa", "meguro", "shibuya", "shinjuku"
const ku_id_to_en = (ku_id: string): string => {
    const ku_id_en_map = new Map<string, string>([
        ["1", "minato"],
        ["2", "shinagawa"],
        ["3", "meguro"],
        ["4", "shibuya"],
        ["5", "shinjuku"],
    ])

    return ku_id_en_map.get(ku_id) ?? ""
}

const DataTable = () => {
    // const search = useLocation().search;
    // const queryString = new URLSearchParams(search);
    const { ku_id } = useParams()
    
    const [data, setData] = useState<Array<PropertyData>>([])
    const [columns, setColumns] = useState<Array<Column<PropertyData>>>([])
    //const urlAPI = "http://18.181.223.212:8888/tabledata";
    const urlAPI = process.env.REACT_APP_FLASK_BACKEND_URL + "/tabledata"
    // const urlAPI = "http://localhost:8888/tabledata";
    console.log(axios.defaults.baseURL)
    useEffect(() => {
        (async () => {
            console.log(`ku_id: ${ku_id}`)
            if(ku_id == undefined){
                return 
            }
            const url = `${urlAPI}?ku=${ku_id_to_en(ku_id)}`
            console.log(`url: ${url}`)
            const tmp = await axios.get(url)

            const tmp2 = JSON.parse(tmp.data)

            setData(tmp2)
            // console.log('tmp2')
            // console.log(tmp2.length)
            // console.log('dataset')



        })()
    }, [])
    const onClickAlert = (name: string) => {
        alert(name);
    };

    // const dataButton: Array<PropertyData> = useMemo(
    //     () => [
    //       {
    //         col1: 'Hello',
    //         // col2: <PrimaryButton name={'hello'} callback={onClickAlert} />,
    //       },
    //     ],
    //     []
    //   );



    const columnsButton: Array<Column<PropertyData>> = useMemo(
        () => [
            {
                Header: convert_en_to_jp("name"),
                accessor: 'name',
                maxWidth: 400,
                minWidth: 140,
                width: 200,
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
            },
            {
                Header: convert_en_to_jp("line"),
                accessor: 'line',
            },
            {
                Header: convert_en_to_jp("land_area_tsubo"),
                accessor: 'land_area_tsubo',
            },
            {
                Header: convert_en_to_jp("building_area_tsubo"),
                accessor: 'building_area_tsubo',
            },
            {
                Header: convert_en_to_jp("tsubo_tanka"),
                accessor: 'tsubo_tanka',
            },
            {
                Header: convert_en_to_jp("nearest_station"),
                accessor: 'nearest_station',
            },
            {
                Header: convert_en_to_jp("walk"),
                accessor: 'walk',
            },
            {
                Header: convert_en_to_jp("bus"),
                accessor: 'bus',
            },
            {
                Header: convert_en_to_jp("land_area"),
                accessor: 'land_area',
            },
            {
                Header: convert_en_to_jp("building_area"),
                accessor: 'building_area',
            },
            {
                Header: convert_en_to_jp("balcony"),
                accessor: 'balcony',
            },
            {
                Header: convert_en_to_jp("structure"),
                accessor: 'structure',
            },
            {
                Header: convert_en_to_jp("year"),
                accessor: 'year',
            },
            {
                Header: convert_en_to_jp("management_fee"),
                accessor: 'management_fee',
            },
            {
                Header: convert_en_to_jp("accumulate_fee"),
                accessor: 'accumulate_fee',
            },
            {
                Header: convert_en_to_jp("accumulate_fee2"),
                accessor: 'accumulate_fee2',
            },
            {
                Header: convert_en_to_jp("stairs"),
                accessor: 'stairs',
            },
            {
                Header: convert_en_to_jp("facing"),
                accessor: 'facing',
            },
            // {
            //     Header: convert_en_to_jp("reform"),
            //     accessor: 'reform',
            //     width: 100,
            // },
            // {
            //     Header: convert_en_to_jp("land_right"),
            //     accessor: 'land_right',
            //     width: 100,
            // },
            {
                Header: convert_en_to_jp("parking"),
                accessor: 'parking',
            },
            {
                Header: convert_en_to_jp("completion"),
                accessor: 'completion',
            },
            {
                Header: convert_en_to_jp("link"),
                accessor: 'link',
                render: (value: any, row: any, index: any) => <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>,
                minWidth: 1000,
            },
        ],
        []
    );


    return (
        <div className="tableContainer">
            <SortableTable columns={columnsButton} data={data} />
        </div>
    )
}

export default DataTable