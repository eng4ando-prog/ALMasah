const express = require('express');
const router = express.Router();

// Mock data
let projects = [];
let layers = [];
let features = [];

// Project routes
router.get('/projects', (req, res) => {
  res.json(projects);
});

router.post('/projects', (req, res) => {
  const project = {
    id: Date.now().toString(),
    name: req.body.name,
    layers: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  projects.push(project);
  res.status(201).json(project);
});

router.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

router.put('/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });

  projects[index] = {
    ...projects[index],
    ...req.body,
    updatedAt: new Date()
  };
  res.json(projects[index]);
});

router.delete('/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });

  projects.splice(index, 1);
  res.status(204).end();
});

// Layer routes
router.get('/layers', (req, res) => {
  res.json(layers);
});

router.post('/layers', (req, res) => {
  const layer = {
    id: Date.now().toString(),
    name: req.body.name,
    type: req.body.type,
    features: [],
    visible: req.body.visible || true,
    locked: req.body.locked || false
  };
  layers.push(layer);
  res.status(201).json(layer);
});

router.get('/layers/:id', (req, res) => {
  const layer = layers.find(l => l.id === req.params.id);
  if (!layer) return res.status(404).json({ error: 'Layer not found' });
  res.json(layer);
});

router.put('/layers/:id', (req, res) => {
  const index = layers.findIndex(l => l.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Layer not found' });

  layers[index] = {
    ...layers[index],
    ...req.body
  };
  res.json(layers[index]);
});

router.delete('/layers/:id', (req, res) => {
  const index = layers.findIndex(l => l.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Layer not found' });

  layers.splice(index, 1);
  res.status(204).end();
});

// Feature routes
router.get('/features', (req, res) => {
  res.json(features);
});

router.post('/features', (req, res) => {
  const feature = {
    id: Date.now().toString(),
    name: req.body.name,
    layerId: req.body.layerId,
    vertices: req.body.vertices || [],
    geometry: req.body.geometry || {},
    area: req.body.area || 0,
    perimeter: req.body.perimeter || 0,
    unit: req.body.unit || 'meters',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  features.push(feature);
  res.status(201).json(feature);
});

router.get('/features/:id', (req, res) => {
  const feature = features.find(f => f.id === req.params.id);
  if (!feature) return res.status(404).json({ error: 'Feature not found' });
  res.json(feature);
});

router.put('/features/:id', (req, res) => {
  const index = features.findIndex(f => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Feature not found' });

  features[index] = {
    ...features[index],
    ...req.body,
    updatedAt: new Date()
  };
  res.json(features[index]);
});

router.delete('/features/:id', (req, res) => {
  const index = features.findIndex(f => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Feature not found' });

  features.splice(index, 1);
  res.status(204).end();
});

module.exports = router;