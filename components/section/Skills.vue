<template>
	<Section id="skills" title="Skills" subtitle="My abilities">
		<div class="skills section-content horizontal">
			<!-- 1st skill -->
			<div class="skills-box" :class="{ 'active': active === 1 }">
				<div class="skills-box__header horizontal inline btn">
					<i class="fa-solid fa-code icon"></i>
					<div>
						<h4>Programming Languages</h4>
						<h6 class="subtitle">Aproximately 4 years</h6>
					</div>
					<i class="fa-solid fa-angle-down icon" @click="active = 1"></i>
				</div>

				<div class="skills-box__list vertical">
					<!-- js -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Java Script</h5>
							<p class="percentage">96%</p>
						</div>
						<div class="skill-bar js"></div>
					</div>
					<!-- ts -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Type Script</h5>
							<p class="percentage">88%</p>
						</div>
						<div class="skill-bar js"></div>
					</div>
					<!-- react / next -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>React / Next .js</h5>
							<p class="percentage">92%</p>
						</div>
						<div class="skill-bar react"></div>
					</div>
					<!-- vue / nuxt -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Vue / Nuxt .js</h5>
							<p class="percentage">98%</p>
						</div>
						<div class="skill-bar vue"></div>
					</div>
					<!-- django -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Django.py</h5>
							<p class="percentage">84%</p>
						</div>
						<div class="skill-bar django"></div>
					</div>
					<!-- css -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>CSS</h5>
							<p class="percentage">100%</p>
						</div>
						<div class="skill-bar css"></div>
					</div>
					<!-- sass -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>SCSS</h5>
							<p class="percentage">100%</p>
						</div>
						<div class="skill-bar sass"></div>
					</div>
					<!-- less -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Less</h5>
							<p class="percentage">85%</p>
						</div>
						<div class="skill-bar less"></div>
					</div>
					<!-- bootstrap -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Bootstrap</h5>
							<p class="percentage">77%</p>
						</div>
						<div class="skill-bar bootstrap"></div>
					</div>
					<!-- html -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>HTML</h5>
							<p class="percentage">100%</p>
						</div>
						<div class="skill-bar html"></div>
					</div>
				</div>
			</div>

			<!-- 2nd skill -->
			<div class="skills-box" :class="{ 'active': active === 2 }">
				<div class="skills-box__header horizontal inline btn">
					<i class="fa-solid fa-clapperboard icon"></i>
					<div>
						<h4>Data Base</h4>
						<h6 class="subtitle">More than 4 years</h6>
					</div>
					<i class="fa-solid fa-angle-down icon" @click="active = 2"></i>
				</div>

				<div class="skills-box__list vertical">
					<!-- my sql -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>MySQL</h5>
							<p class="percentage">80%</p>
						</div>
						<div class="skill-bar my_sql"></div>
					</div>
					<!-- pl sql -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Oracle PL / SQL</h5>
							<p class="percentage">80%</p>
						</div>
						<div class="skill-bar pl_sql"></div>
					</div>
					<!-- postgres sql -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>PostgresSQL</h5>
							<p class="percentage">89%</p>
						</div>
						<div class="skill-bar postgres_sql"></div>
					</div>
					<!-- sqlite -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>SQLite</h5>
							<p class="percentage">77%</p>
						</div>
						<div class="skill-bar sqlite"></div>
					</div>
				</div>
			</div>

			<!-- 3rd skill -->
			<div class="skills-box" :class="{ 'active': active === 3 }">
				<div class="skills-box__header horizontal inline btn">
					<i class="fa-solid fa-object-group icon"></i>
					<div>
						<h4>Designer</h4>
						<h6 class="subtitle">More than 6 years</h6>
					</div>
					<i class="fa-solid fa-angle-down icon" @click="active = 3"></i>
				</div>

				<div class="skills-box__list vertical">
					<!-- adobe photoshop -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Adobe Photoshop</h5>
							<p class="percentage">88%</p>
						</div>
						<div class="skill-bar adobe_photoshop"></div>
					</div>
					<!-- figma -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Figma</h5>
							<p class="percentage">95%</p>
						</div>
						<div class="skill-bar figma"></div>
					</div>
					<!-- fusion -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Fusion 360*</h5>
							<p class="percentage">76%</p>
						</div>
						<div class="skill-bar fusion"></div>
					</div>
					<!-- coreldraw -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>CorelDRAW</h5>
							<p class="percentage">76%</p>
						</div>
						<div class="skill-bar coreldraw"></div>
					</div>
				</div>
			</div>

			<!-- 4th skill -->
			<div class="skills-box" :class="{ 'active': active === 4 }">
				<div class="skills-box__header horizontal inline btn">
					<i class="fa-solid fa-language icon"></i>
					<div>
						<h4>Languages</h4>
						<h6 class="subtitle">From birth</h6>
					</div>
					<i class="fa-solid fa-angle-down icon" @click="active = 4"></i>
				</div>

				<div class="skills-box__list vertical">
					<!-- english -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<nuxt-link to="https://drive.google.com/file/d/1FDTru0F0fmUbImlWmFKx1PQ9QbS0zvqR">
								<h5 class="name">English</h5>
							</nuxt-link>
							<p class="percentage">Upper-Intermediate</p>
						</div>
						<div class="skill-bar english"></div>
					</div>
					<!-- kazakh -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Kazakh</h5>
							<p class="percentage">Native</p>
						</div>
						<div class="skill-bar kazakh"></div>
					</div>
					<!-- russian -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Russian</h5>
							<p class="percentage">Fluent</p>
						</div>
						<div class="skill-bar russian"></div>
					</div>
					<!-- turkish -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<h5>Turkish</h5>
							<p class="percentage">Upper-Intermediate</p>
						</div>
						<div class="skill-bar turkish"></div>
					</div>
					<!-- chinese -->
					<div class="skill">
						<div class="skill-data horizontal inline space">
							<nuxt-link to="https://drive.google.com/file/d/1Nc2r3H21SrN_16sO473fxIXHeC-gScnL">
								<h5 class="name">Chinese</h5>
							</nuxt-link>
							<p class="percentage">Intermediate</p>
						</div>
						<div class="skill-bar chinese"></div>
					</div>
				</div>
			</div>
		</div>
	</Section>
</template>

<script setup>
const active = ref(1);
</script>
