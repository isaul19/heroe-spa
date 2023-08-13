import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  let content = characters.replace(alter_ego, "");

  if (content.startsWith(",")) {
    content = content.replace(",", "");
  }

  return <p>{content}</p>;
};

export const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;

  const heroImageUrl = `/heroes/${id}.jpg`;

  return (
    <div className="col" key={id}>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={heroImageUrl} alt={`hero-${superhero}`} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>More Information</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
