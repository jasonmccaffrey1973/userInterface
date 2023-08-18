import React, { useEffect, useState, Suspense } from 'react'
import Loader from './Loader'

const LazyLoadComponent = ({ path, name }) => {
  const [LoadedComponent, setLoadedComponent] = useState(null)

  useEffect(() => {
    let isMounted = true

    const importComponent = async () => {
      try {
        const componentModule = await import(`${path}`)
        const Component = name ? componentModule[name] : componentModule.default
        return Component
      } catch (error) {
        console.error(`Error loading component: ${error}`);
        return null
      }
    };

    importComponent().then((Component) => {
      if (isMounted) {
        setLoadedComponent(Component)
      }
    })

    return () => {
      isMounted = false
    }
  }, [path, name])

  return (
    <Suspense fallback={<Loader />}>
      {LoadedComponent && <LoadedComponent />}
    </Suspense>
  )
}

export default LazyLoadComponent