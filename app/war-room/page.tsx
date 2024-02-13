import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs'

export default function War() {

  const breadcrumbItems = ['Cervejas', 'Ambev', 'Budweiser', 'Budweiser Lager'];

  return (<div className='bg-black bg-cover h-svh flex items-center justify-center'>
    <Breadcrumbs items={breadcrumbItems} />


  </div>
  )
}