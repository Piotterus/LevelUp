import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
    return (
        <Svg width={23.382} height={23.382} viewBox="0 0 23.382 23.382" {...props}>
            <Defs></Defs>
            <Path
                className="prefix__a"
                d="M11.691 0a11.691 11.691 0 1011.691 11.691A11.7 11.7 0 0011.691 0zm0 22.407a10.717 10.717 0 1110.716-10.716 10.729 10.729 0 01-10.716 10.716z"
            />
            <Path
                className="prefix__a"
                d="M18.023 11.205h-5.845V5.36a.487.487 0 00-.974 0v5.845H5.359a.487.487 0 100 .974h5.846v5.845a.487.487 0 00.974 0v-5.845h5.845a.487.487 0 000-.974z"
            />
        </Svg>
    )
}

export default SvgComponent
