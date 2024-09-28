import React from 'react'; 
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
        

const servicios = [
    {
        title: "HIGIENE FACIAL PROFUNDA",
        image: "./src/assets/images/higieneFacial.jpg",
        description: "La Higiene Facial Profunda es un tratamiento estético diseñado para limpiar y revitalizar la piel del rostro, eliminando impurezas, exceso de grasa y células muertas. Este procedimiento es ideal para todo tipo de piel, especialmente para aquellas que presentan problemas como acné, puntos negros o poros dilatados.",
        Button:<Button label="Help" severity="help" rounded />

    },
    {
      title: "DERMAPLANING",
      image: "./src/assets/images/dermaplaning.jpg",
      description: "El Dermaplaning es un tratamiento estético no invasivo que consiste en exfoliar la piel del rostro utilizando un instrumento quirúrgico de alta precisión. Este procedimiento elimina las células muertas de la superficie de la piel dejando una piel más suave, radiante y de apariencia más uniforme.",
  },
  
    {
        title: "SEMIPERMANENTES DE UÑAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        image: "./src/assets/images/semi.jpg"
    },
    {
        title: "LIFTING DE PESTAÑAS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        image: "./src/assets/lifting.jpg"
    },
    // Puedes agregar más servicios aquí
   
  {
    title: "MASAJES RELAJANTES",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
    image: "./src/assets/images/masaje.jpg"
}
];

export default function BasicDemo() {
    return (
        <div className="card">
            <h1 style={{textAlign:'center'}}>SERVICIOS QUE OFRECEMOS</h1>
            {servicios.map((servicio, index) => (
                <Card key={index} title={servicio.title} style={{color:'#9e2997'}}>
                    <p className="m-0" style={{color:'black'}}>{servicio.description}</p>
                    <div className="card flex justify-content-center">
                        <Image src={servicio.image} alt={servicio.title} width="250" />
                    </div>
                    <Button label="Quiero reservar un turno💛" style={{marginTop:'5px'}} severity="help" rounded />

                   
                </Card>
            ))}
        </div>
    );
};




        

