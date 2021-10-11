

# trying again..
> moving dirs to fix permission issues caused by p-cloud

Notes:
- This time I'm going to try using pnpm !
- The commands below don't include the changes required to the config or template files!

### initial project setup
```bash
	
	#initial project setup
	npm init astro -- --template "minimal" .
	git init -b main && git add --all && git commit -m "iniital commit"
	pnpm install

```

### tailwind support
```bash

	#add tailwind (astro handles tailwind's peer-deps)
	pnpm install --save-dev tailwindcss@latest

	#init tailwind (generates custom config)
	pnpx tailwindcss init

	#useful tailwind plugins
	pnpm install --save-dev @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
```
