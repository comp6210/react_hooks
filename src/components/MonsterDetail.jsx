function MonsterDetail({monster})
{
    return(
        <div className="monster-detail">
            <h2>{monster.name}</h2>
            <p><strong>Description: </strong> {monster.description}</p>
            <p><strong>Movies appeared in: </strong> {monster.movies.join(', ')}</p>
        </div>
    );
}

export default MonsterDetail;