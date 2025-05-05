'use client';

import MainLayout from "@/components/layouts/main-layout";
import {Card, CardContent} from "@/components/ui/card";
import {AlertTriangle, Clock, Server} from "lucide-react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


export default function Home() {


  return (
      <MainLayout>
          <div className="p-6 space-y-6">
              <h1 className="text-2xl font-bold">Gösterge Paneli</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                      <CardContent className="flex items-center gap-4 py-6">
                          <Server className="text-blue-600" size={28}/>
                          <div>
                              <div className="text-sm text-gray-500">Toplam Sunucu</div>
                              <div className="text-xl font-bold">18</div>
                          </div>
                      </CardContent>
                  </Card>

                  <Card>
                      <CardContent className="flex items-center gap-4 py-6">
                          <AlertTriangle className="text-red-600" size={28}/>
                          <div>
                              <div className="text-sm text-gray-500">Hata Veren</div>
                              <div className="text-xl font-bold">3</div>
                          </div>
                      </CardContent>
                  </Card>

                  <Card>
                      <CardContent className="flex items-center gap-4 py-6">
                          <Clock className="text-green-600" size={28}/>
                          <div>
                              <div className="text-sm text-gray-500">Ortalama Uptime</div>
                              <div className="text-xl font-bold">98.3%</div>
                          </div>
                      </CardContent>
                  </Card>
              </div>

              <Card>
                  <CardContent className="py-6">
                      <div className="text-sm text-gray-500 mb-2">Haftalık Uptime Grafiği</div>
                      <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={[
                                  { day: "Pzt", uptime: 99.8 },
                                  { day: "Sal", uptime: 99.2 },
                                  { day: "Çar", uptime: 98.6 },
                                  { day: "Per", uptime: 99.4 },
                                  { day: "Cum", uptime: 97.9 },
                                  { day: "Cmt", uptime: 96.5 },
                                  { day: "Paz", uptime: 98.7 },
                              ]}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="day" />
                                  <YAxis domain={[95, 100]} tickFormatter={(val) => `${val}%`} />
                                  <Tooltip />
                                  <Line type="monotone" dataKey="uptime" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                              </LineChart>
                          </ResponsiveContainer>
                      </div>
                  </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                      <CardContent className="py-4">
                          <h2 className="text-base font-semibold mb-2">Sunucu Etkinliği</h2>
                          <p className="text-sm text-gray-600">Son 24 saatte 34 işlem yapıldı.</p>
                      </CardContent>
                  </Card>

                  <Card>
                      <CardContent className="py-4">
                          <h2 className="text-base font-semibold mb-2">Günlük Yedekleme</h2>
                          <p className="text-sm text-gray-600">En son 3 saat önce yedek alındı.</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </MainLayout>
  );
}
