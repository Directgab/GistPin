import "./featured.scss"
import cinpin from './cinpin.jpg';
import matrix from './matrix.png';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";


export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "TV Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={cinpin} alt="" />
            <div className="info">
                <img src={matrix} alt=""/>
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam assumenda nisi consequuntur repudiandae harum in quisquam molestias nobis veniam repellat nulla quasi animi labore dolorum error nihil exercitationem facere.</span>
                <div className="button">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}