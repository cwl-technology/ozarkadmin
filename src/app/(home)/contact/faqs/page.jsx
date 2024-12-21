import React from 'react'
import Faq from './Faq'
import api from '@/_config/config';

export const generateMetadata = async () => {
  try {
    const res = await api.post("/page_title_data/get_page_title_by_type",{
      type:"FAQ"
    });
    const data = res.data.data
    return {
      title: data?.title,
      keywords: data?.keyword,
      description: data?.meta_description
    }
  } catch (err) {
    console.log(err);
  }
}

function page() {
  return (
    <Faq/>
  )
}

export default page