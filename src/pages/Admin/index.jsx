import React from 'react'
import MovieList from './MovieList'
import TheatreTable from './TheatreTable'
import { Tabs } from 'antd'

export default function index() {
    const tabItems = [
        {
            key:"1",
            label:"Movies",
            children:<MovieList/>
        },
        {
            key:"2",
            label:"Theatres",
            children:<TheatreTable/>
        }
    ]
  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabItems} />
    </div>
  )
}
