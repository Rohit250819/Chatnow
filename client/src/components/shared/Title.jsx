import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = ({ title='Chat App', description='try out this new chat app now!!'}) => {
  return (
    <Helmet>
      <title>
        {title}
      </title>
      <meta name='description' content={description}/>
    </Helmet>
  )
}

export default Title