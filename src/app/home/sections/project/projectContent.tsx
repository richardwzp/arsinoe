import star from "@public/ImageResource/sandman_star.png";
import top from "@public/ImageResource/sandmanClassTop.png";
import bot from "@public/ImageResource/sandmanClassBot.png";
import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import java from "@public/ImageResource/java.svg";
import TinyButton from "@src/component/common/tinyButton";
import SeeFading from "@src/component/common/SeeFading";
import Image from 'next/image';

const sandmanDescription = "A python implementation of a moderation bot backed by a mySQL database. " +
  "The bot primary serves as a moderator tools for the community CS server, while providing " +
  "stateful role menu for intuitive role assignment utilizing the discord API. slash-command library " +
  "was used instead of discord.py, as at the starting time of this project, the maintainer of the repository " +
  "has not yet made his return."

const imageDescription = "Provides common filtering operations and color transformations. Supported feature includes " +
  "sharpen, blur, monochrome, sepia, mosaic, nad downscale. There's also a built-in layer system that allows the user " +
  "to operate on multiple image at once."

const raftDescription = "A python implementation for the raft consensus algorithm. " +
  "This is the final project for my Network and distribution system. The implementation is heavily influenced " +
  "by a british guy who had a whole course posted on distribution system. Code is not linked due to privacy reasons."

const imgStyle = {
  maxWidth: "280px",
  alignSelf: "center",
  backgroundColor: "rgb(14, 17, 22)",

}
const imgDivStyle = {
  borderStyle: "solid",
  borderColor: "white",
  borderRadius: "3%",
  border: "1px solid white",
  overflow: "hidden",
}

const gen = (name: string, img: string) =>
(<SeeFading>
  <Box style={imgDivStyle}>
    <img style={imgStyle} src={img} alt={name} />
  </Box>
</SeeFading>);

const projectContent = [
  {
    title: "Sandman Discord Bot",
    description: sandmanDescription,
    children: (
      <div>
        <TinyButton
          link={"https://github.com/richardwzp/teleute"}
          icon={<GitHubIcon />}
          text={"Repo Link"} />
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
          {gen("top", top.src)}
          {gen("bot", bot.src)}
          {gen("star", star.src)}
        </div>
      </div>
    ),
  },
  {
    title: "GUI Image processor",
    description: imageDescription,
    children: (
      <div>
        <TinyButton
          style={{
            color: "rgb(255, 186, 112)",
            backgroundColor: "rgb(24, 27, 36)",
          }}
          link={"photoshop.jar"}
          icon={<img src={java} style={{ width: "24px" }} alt="java" />}
          text={"jar file"} />
      </div>
    ),
  },
  {
    title: "Raft Consensus Algorithm",
    description: raftDescription,
    children: null,
  }
]

export default projectContent;

