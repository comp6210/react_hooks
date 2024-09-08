function NavMenu({monsters, onSelectedMonster})
{
    return(
        <nav className="nav-menu">
            <ul>
                {
                    monsters.map(
                        (monster) => (
                            <li key={monster.name}>
                                <button onClick={()=>onSelectedMonster(monster)}>{monster.name}</button>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    );
}

export default NavMenu;