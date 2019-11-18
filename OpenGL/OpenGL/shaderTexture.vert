#version 450

in layout(location=0) vec3 position;
in layout(location=1) vec2 uv;

out vec2 UV;

void main()
{
    gl_Position = vec4(position, 1.0) ;

	UV = uv;
}