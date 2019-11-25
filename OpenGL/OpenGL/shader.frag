#version 450

out vec4 color;

in vec2 UV;
in vec3 normal_Out;

uniform sampler2D texture_ ;

void main()
{
	color = texture(texture_, UV) ;//* vec4(normal_Out,1) ;
	//color = vec4(vec3(color) * normal_Out,1);
}