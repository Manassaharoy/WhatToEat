import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Link, useParams } from "react-router-dom"

function Recipe() {

    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activeTab, setactiveTab] = useState('instructions');

    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailedData = await data.json();
        setRecipe(detailedData);

    }

    useEffect(()=>{
        fetchDetails();
    }, [params.name])


  return (
    <DetailWrapper>
        <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="{recipe.title}" />
        </div>
    <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>{setactiveTab("instructions")}} >Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>{setactiveTab("ingredients")}}>Ingredients</Button>
    
        {activeTab === 'instructions' && (
                <div>
                <h4 dangerouslySetInnerHTML={{__html: recipe.summary}}></h4>
                <br /> 
                <i>Instruction:</i>
                {recipe.instructions ? (<h5 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h5>) : (<h4>No instructions available</h4>)}
                </div>

        )}

        {activeTab === 'ingredients' &&  (
      
            <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
                
            </ul>)}

    </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
 li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
ul{
    margin-top: 2rem;
}`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  `;
const Info = styled.div`

  margin-left: 10rem;
  `;

export default Recipe