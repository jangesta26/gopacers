import React from 'react'

const CommunitySection = ({children}:{children : React.ReactNode;}) => {

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {children}
        </div>
    </section>
  )
}

export default CommunitySection
