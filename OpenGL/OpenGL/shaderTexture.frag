#version 450

out vec4 color;

in vec2 UV;

uniform sampler2D texture_ ;

void main()
{
	color = texture(texture_, UV);
	//color = vec4(UV,0,1);
}