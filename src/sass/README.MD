# La regla del 7+1

---

También conocida como patrón `7–1` es una estructura ampliamente estandarizada como forma de organizar proyectos complejos. Consiste en tener todos los partials organizados en 7 carpetas y un único archivo en la raíz para gestionar todos los imports necesarios.

![x](https://i.ibb.co/ZSmPvh4/1-0-MP59mq0-K-Hi2-ECSb-Zwhg.png)

- **`abstracts`**: En esta carpeta se encuentran las funciones, variables y mixins que emplearemos en el resto de ficheros. Estos archivos no generan ninguna regla CSS al ser compilados sino que añaden funcionalidad extra para ser empleada por los otros partials.
- > Nota - La carpeta `abstracts/` también se puede llamar `utilities/`, `utils/` o `helpers/`, dependiendo de tus preferencias.
- **`base`**: Contiene el código base de nuestro proyecto como es las reglas de tipografía (y fuentes adicionales) así como los resets necesarios para sobrescribir las reglas por defecto de los navegadores.
- **`components`**: Contiene los estilos de los distintos componentes que emplearemos dentro de nuestra aplicación como pueden ser botones, jumbos, sliders, carruseles… Separar cada componente en su propio archivo nos permitirá reutilizarlos en otros proyectos.
- > Nota - La carpeta `components/` también se puede llamar `modules/`, todo depende de lo que tu prefieras.
- **`layout`**: En esta carpeta aparecen los estilos relacionados con la estructura de nuestra página web, como por ejemplo el sistema de grid que estemos empleando así como los estilos de la cabecera, el footer…
- > Nota - La carpeta `layout/` también se puede llamar `partials/` dependiendo de tus preferencias.
- **`views`**: Contiene los estilos específicos para determinadas vistas (páginas) de nuestro proyecto como puede ser la página de inicio o la de contacto.
- > Nota - La carpeta `views/` también se puede llamar `scenes/`, o `pages/`, dependiendo de tus preferencias.
- **`themes`** . Seguramente esta sea la carpeta que más os ha llamado la atención ya que su uso no es muy común. Su razón de ser es la de almacenar los estilos referidos a diferentes themes que pueda adoptar nuestro proyecto en función, por ejemplo, del tipo de usuario o la sección que esté visualizándose.
- > Nota - `Themes` es muy específico del proyecto y es probable que sea inexistente en muchos de ellos.
- **`vendors`**: Esta carpeta es para CSS de terceros. Esto es útil cuando se usan componentes preempacados desarrollados por otras personas (o para sus propios componentes que se mantienen en otro proyecto)

- Finalmente, el archivo **`main.scss`**, situado en la raíz del sass, importará todos los archivos situados dentro de cada carpeta sin contener código sass adicional. Por ejemplo:

![example2](https://i.ibb.co/k3WwtPm/main.png)

###### [Mas información aquí!](https://sass-guidelin.es/#architecture)

<br>
