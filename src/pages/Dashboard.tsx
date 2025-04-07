
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, Download, FileSpreadsheet, Filter, Grid3X3, MapPin, PieChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for charts
const projectData = [
  { name: 'Jan', value: 34 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 31 },
  { name: 'Apr', value: 65 },
  { name: 'May', value: 49 },
  { name: 'Jun', value: 62 },
  { name: 'Jul', value: 91 },
  { name: 'Aug', value: 102 },
];

const samplesData = [
  { name: 'Q1', sedimentary: 120, igneous: 75, metamorphic: 45 },
  { name: 'Q2', sedimentary: 90, igneous: 95, metamorphic: 60 },
  { name: 'Q3', sedimentary: 170, igneous: 55, metamorphic: 80 },
  { name: 'Q4', sedimentary: 140, igneous: 130, metamorphic: 90 },
];

const Dashboard = () => {
  const [period, setPeriod] = useState('month');
  
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-geo-blue to-geo-teal flex items-center justify-center text-white font-bold text-lg mr-2">
              G
            </div>
            <span className="font-bold text-lg tracking-tight">GeoData<span className="text-geo-blue">Hub</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/dashboard" className="font-medium text-primary">Tableau de bord</Link>
            <Link to="/dashboard/projects" className="font-medium text-muted-foreground transition-colors hover:text-foreground">Projets</Link>
            <Link to="/dashboard/samples" className="font-medium text-muted-foreground transition-colors hover:text-foreground">Échantillons</Link>
            <Link to="/dashboard/maps" className="font-medium text-muted-foreground transition-colors hover:text-foreground">Cartes</Link>
            <Link to="/dashboard/analyses" className="font-medium text-muted-foreground transition-colors hover:text-foreground">Analyses</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <span className="sr-only">Profil</span>
              <span>Profil</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Tableau de Bord</h1>
              <p className="text-muted-foreground mt-1">Bienvenue sur votre dashboard GeoDataHub.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setPeriod('week')} className={period === 'week' ? 'bg-muted' : ''}>
                  Semaine
                </Button>
                <Button variant="outline" size="sm" onClick={() => setPeriod('month')} className={period === 'month' ? 'bg-muted' : ''}>
                  Mois
                </Button>
                <Button variant="outline" size="sm" onClick={() => setPeriod('year')} className={period === 'year' ? 'bg-muted' : ''}>
                  Année
                </Button>
              </div>
              <Button variant="outline" size="sm" className="flex gap-2 items-center">
                <Download size={16} />
                Exporter
              </Button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Projets actifs</CardTitle>
                <Grid3X3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">12%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Échantillons</CardTitle>
                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">34%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sites d'échantillonnage</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">64</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">8%</span> depuis le mois dernier
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Collaborateurs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Inchangé depuis le mois dernier
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts section */}
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Activité des projets</CardTitle>
                <CardDescription>Évolution des projets géologiques sur la période</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer
                    config={{
                      value: {
                        theme: {
                          light: "#1e88e5",
                          dark: "#90caf9",
                        },
                      },
                    }}
                  >
                    <LineChart data={projectData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="value" stroke="var(--color-value)" activeDot={{ r: 8 }} name="Projets" />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Types d'échantillons</CardTitle>
                <CardDescription>Distribution par type de roche</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer
                    config={{
                      sedimentary: {
                        theme: {
                          light: "#8884d8",
                          dark: "#a395e9",
                        },
                        label: "Sédimentaires",
                      },
                      igneous: {
                        theme: {
                          light: "#82ca9d",
                          dark: "#a2e9d2",
                        },
                        label: "Ignées",
                      },
                      metamorphic: {
                        theme: {
                          light: "#ffc658",
                          dark: "#ffe0a8",
                        },
                        label: "Métamorphiques",
                      },
                    }}
                  >
                    <BarChart data={samplesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="sedimentary" fill="var(--color-sedimentary)" />
                      <Bar dataKey="igneous" fill="var(--color-igneous)" />
                      <Bar dataKey="metamorphic" fill="var(--color-metamorphic)" />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent projects */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Projets récents</CardTitle>
                <Button variant="outline" size="sm" className="flex gap-2 items-center">
                  <Filter size={16} />
                  Filtrer
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium py-3 px-4">Nom du projet</th>
                      <th className="text-left font-medium py-3 px-4">Localisation</th>
                      <th className="text-left font-medium py-3 px-4">Type</th>
                      <th className="text-left font-medium py-3 px-4">Date de mise à jour</th>
                      <th className="text-left font-medium py-3 px-4">Échantillons</th>
                      <th className="text-right font-medium py-3 px-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Bassin de Paris</td>
                      <td className="py-3 px-4">Île-de-France, France</td>
                      <td className="py-3 px-4">Sédimentaire</td>
                      <td className="py-3 px-4">12 mars 2025</td>
                      <td className="py-3 px-4">247</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Voir</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Mont Pelée</td>
                      <td className="py-3 px-4">Martinique</td>
                      <td className="py-3 px-4">Volcanique</td>
                      <td className="py-3 px-4">5 mars 2025</td>
                      <td className="py-3 px-4">132</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Voir</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Alpes du Sud</td>
                      <td className="py-3 px-4">PACA, France</td>
                      <td className="py-3 px-4">Métamorphique</td>
                      <td className="py-3 px-4">28 février 2025</td>
                      <td className="py-3 px-4">189</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Voir</Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Massif armoricain</td>
                      <td className="py-3 px-4">Bretagne, France</td>
                      <td className="py-3 px-4">Plutonique</td>
                      <td className="py-3 px-4">20 février 2025</td>
                      <td className="py-3 px-4">156</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Voir</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Bassin aquitain</td>
                      <td className="py-3 px-4">Nouvelle-Aquitaine, France</td>
                      <td className="py-3 px-4">Sédimentaire</td>
                      <td className="py-3 px-4">15 février 2025</td>
                      <td className="py-3 px-4">203</td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">Voir</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Voir tous les projets</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
