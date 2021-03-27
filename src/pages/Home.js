import React from 'react'
import Header from '../components/Header'
import Particles from 'react-particles-js'
import '../App.css'

const Home = () => {
    return (
        <>
            <Particles
                    className='tsparticles-canvas'
                    params={{
                        particles:{
                        number:{
                            value: 30,
                            density:{
                            enable: true,
                            value_area: 900
                            }
                        },
                        shape:{
                            type: "circle",
                            stroke:{
                            width: 6,
                            color: "#04e03b"
            }
          }
        }
      }}
    
    />
    <Header />
        </>
    )
}
export default Home;